import MiniProductCard from './MiniProductCard';

import BestChoiceProducts from './BestChoiceProducts';
const BestChoiceSection = () => {
  
  const specialOfferMic = '/assets/special-offer-mic.jpg'; 

  return (
    <section className="bg-gray-900 py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-white">The Best Choice</h2>
            <a href="#" className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors duration-200">
              View all
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BestChoiceProducts.slice(0, 10).map((product) => ( 
              <MiniProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      
        <div
          className="relative bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center overflow-hidden"
          style={{ backgroundImage: `url(${specialOfferMic})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
        >
         
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

  
          <div className="relative z-10 text-white">
            <h3 className="text-5xl font-bold mb-4">MIKRO</h3> 
            <p className="text-xl mb-8">SPECIAL FOR GAMERS</p>
            <p className="text-4xl font-bold text-indigo-400">Limited offer</p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestChoiceSection;