import Head from 'next/head';
import React from 'react';

export default function GiftCardsPage() {

  const handlePurchase = (amount) => {
    console.log(`Purchasing ${amount} gift card`);
    // Implement purchase logic
  };
  
  const handleApplyGiftCard = () => {
    console.log('Applying gift card');
    // Implement apply gift card logic
  };
  
  const handleShareGiftCard = () => {
    console.log('Sharing gift card');
    // Implement share gift card logic
  };

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Gift Cards</title>
      </Head>
      <h1 className="text-2xl font-bold my-4">Gift Cards</h1>

      {/* Gift Card Purchase Section */}
      <div className="my-6">
        <h2 className="text-xl font-semibold mb-3">Purchase a Gift Card</h2>
        <div className="flex space-x-4">
          {['$5', '$10', '$20'].map((amount) => (
            <button 
              key={amount} 
              onClick={() => handlePurchase(amount)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Buy {amount} Gift Card
            </button>
          ))}
        </div>
      </div>

      {/* Gift Card Usage Section */}
      <div className="my-6">
        <h2 className="text-xl font-semibold mb-3">Use Your Gift Card</h2>
        <input 
          type="text" 
          placeholder="Enter Gift Card Code" 
          className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
        />
        <button 
          onClick={handleApplyGiftCard}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Apply
        </button>
      </div>

      {/* Gift Card Sharing Section */}
      <div className="my-6">
        <h2 className="text-xl font-semibold mb-3">Share Your Gift Card</h2>
        <p className="mb-3">Enter the recipient's email address to share your gift card with them.</p>
        <input 
          type="email" 
          placeholder="Recipient's Email" 
          className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
        />
        <button 
          onClick={handleShareGiftCard}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Share
        </button>
      </div>
    </div>
  );
}
