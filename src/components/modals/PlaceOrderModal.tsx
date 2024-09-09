'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PlaceOrderForm } from '@/components/forms/PlaceOrderForm';
import { FaArrowRight } from 'react-icons/fa6';

interface PlaceOrderModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  brandName: string;
  modelName: string;
  selectedColor: ColorOption;
}

export const PlaceOrderModal: React.FC<PlaceOrderModalProps> = ({
  isOpen,
  setIsOpen,
  brandName,
  modelName,
  selectedColor,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button icon={<FaArrowRight />} iconPosition='right'>
          Order now
        </Button>
      </DialogTrigger>
      <DialogContent className='order-modal h-full w-full md:flex md:gap-0 md:border-0 md:p-0'>
        <div
          className='hidden min-w-[300px] md:block'
          style={{
            backgroundImage: 'url("/form-decoration.png")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className='md:p-6 md:px-12'>
          <DialogHeader>
            <DialogTitle className='order-modal-title'>
              Finalise Your Order
            </DialogTitle>
            <DialogDescription className='sr-only' role="label">
              Please fill in the form below to complete your order.
            </DialogDescription>
          </DialogHeader>
          <PlaceOrderForm
            onClose={() => setIsOpen(false)}
            brandName={brandName}
            modelName={modelName}
            selectedColor={selectedColor}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};