import { FaCircleCheck } from 'react-icons/fa6';

export const OrderSuccessMessage = () => {
    return (
        <div className='rounded-lg border-2 border-l-6 border-success-medium p-4'>
            <div className='flex items-center gap-2 text-success-medium'>
                <FaCircleCheck data-testid='check-icon' />
                <p className='font-medium text-success'>
                    We&apos;ve received your order
                </p>
            </div>
            <p className='mt-3'>
                You&apos;ll receive a call in the next 24 hours and finalise
                your order with one of our agents.
            </p>
        </div>
    );
};
