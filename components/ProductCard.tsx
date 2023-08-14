import { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { subscribe } from '@/domain/usecases/payments';

const ProductCard = ({ product, prices }: {
  product: any;
  prices: any[];
 }) => {
  const priceData = prices[0];
  const priceWithCents = (priceData.unit_amount / 100).toFixed(2);

  console.log(JSON.stringify(product, null, 2));

  const formatedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: priceData.currency,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  }).format(priceWithCents);
  const priceText = `${formatedPrice} / ${priceData.interval ?? 'once'}`;

  const [loading, setLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      await subscribe({ priceId: priceData.id });
      setIsSubscribed(true);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const buttonText = isSubscribed ? 'Redirecting...' : 'Subscribe';
  return (
    <div className="flex items-center justify-center rounded-lg bg-[#2d2d2d] shadow">
      <div>
        <div>
          <p className="px-4 pt-4 text-left text-lg font-bold text-[#42A5F5]">
            {product?.name.toUpperCase() ?? ''}
          </p>
        </div>
        <p className="px-4 pt-2 text-white">{product?.description ?? ''}</p>
        <p className="px-4 pt-8 text-3xl font-bold text-white">{priceText}</p>
        <div className="px-5 pt-10">
          <button
            onClick={handleSubscribe}
            disabled={loading || isSubscribed}
            className={`focus:shadow-outline-blue w-full rounded-sm bg-[#42A5F5] px-4 py-2 my-6 text-white hover:bg-gray-700 focus:border-gray-700 focus:outline-none active:bg-gray-800 ${
              loading || isSubscribed ? 'cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <CircularProgress size={16} style={{ color: 'inherit' }} />
            ) : (
              buttonText
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
