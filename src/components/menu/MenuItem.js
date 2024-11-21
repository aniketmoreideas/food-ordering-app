export default function MenuItem() {
  return (
    <div className="text-center p-3 pb-5 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-all hover:shadow-xl">
      <div className="text-center">
        <img src="./pizza.png" alt="pizza" className="max-h-44 block mx-auto" />
      </div>
      <h4 className="text-xl font-semibold">Pepperoni Pizza</h4>
      <p className="text-sm italic text-gray-500 py-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
      </p>
      <button className="bg-primary px-6 rounded-full text-white py-2">
        Add to cart AED 30
      </button>
    </div>
  );
}
