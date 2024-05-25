import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Payment = () => {
  const nagivate = useNavigate();
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    toast.success("Payment successful");
    nagivate("/");
  };

  return (
    <div className="pt-10 testimonial-section">
      <div className="w-full max-w-lg mx-auto p-8 h-[600px]">
        <div className="bg-white rounded-lg shadow-lg px-6 py-12">
          <h2 className="text-base font-medium mb-6">Payment Information</h2>
          <form onSubmit={handlePaymentSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="card-number"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Card Number
                </label>
                <input
                  type="number"
                  name="card-number"
                  id="card-number"
                  placeholder="0000 0000 0000 0000"
                  className="w-full  p-2 px-4 border border-gray-400 rounded-lg outline-none placeholder:text-sm"
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="expiration-date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  name="expiration-date"
                  id="expiration-date"
                  placeholder="MM / YY"
                  className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none placeholder:text-sm"
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  CVV
                </label>
                <input
                  type="number"
                  name="cvv"
                  id="cvv"
                  placeholder="000"
                  className="w-full py-2 px-4 border border-gray-400 rounded-lg outline-none placeholder:text-sm "
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="card-holder"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Card Holder
                </label>
                <input
                  type="text"
                  name="card-holder"
                  id="card-holder"
                  placeholder="Full Name"
                  className="w-full p-2 border border-gray-400 rounded-lg outline-none placeholder:text-sm"
                  required
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-red-400 hover:bg-green-500 text-white transition-all duration-300 ease-in-out font-medium py-2 text-sm rounded-lg focus:outline-none"
              >
                Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
