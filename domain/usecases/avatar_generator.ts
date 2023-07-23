import { v4 as uuidv4 } from 'uuid';
import { createAvatar, getAvatar } from "../../data/firestore";
import { Avatar, AvatarStatus } from "../models/avatar";
import { None } from '@sniptt/monads';
import { gpt3MarketingPlan, pollHuggingFaceAvatarModel } from '../../data/functions_api';
import firebase from "../../utils/firebase";

export const generateAvatar = async ({ prompt }: {
    prompt: string,
}): Promise<Avatar> => {
    const uuid = uuidv4();
    const avatar: Avatar = {
        id: uuid,
        userId: firebase.JOHANNES_USERID, // TODO: get from auth
        prompt,
        status: "initial",
        url: None,
        errorMsg: None,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    const avatarId = await createAvatar({ avatar });
    console.log(`created avatar with id ${avatarId}`)

    return avatar;
};

export const pollAvatarStatus = async (
    avatarId: string,
): Promise<AvatarStatus> => {
    const avatar = await getAvatar({
        id: avatarId,
        userId: firebase.JOHANNES_USERID, // TODO: get from auth
    });

    return await avatar.match({
        some: async (avatar: Avatar): Promise<AvatarStatus> => {
            const status = avatar.status;

            console.log(`avatar status: ${status}`);

            if (status !== "generating") {
                return status;
            }

            const prompt = avatar.prompt;
            const result = await pollHuggingFaceAvatarModel({ 
                prompt, 
                userId: avatar.userId,
                avatarId: avatar.id, 
            });
            console.log(JSON.stringify(result));

            return status;
        },
        none: async (): Promise<AvatarStatus> => {
            console.log("No avatar found")
            return "error";
        },
    });

}

export const generateMarketingPlan = async ({
    artistName,
    artistGenres,
    igFollowerCount,
}: {
    artistName: string;
    artistGenres: string;
    igFollowerCount: number;
}): Promise<string> => {
    const res = await gpt3MarketingPlan({
        artistName,
        artistGenres,
        igFollowerCount,
    });

    return res.text;
};