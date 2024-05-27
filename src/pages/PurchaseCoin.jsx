import { useEffect, useState } from "react";
import { plans } from "../utils/coinplans";
import { GiTwoCoins } from "react-icons/gi";
import { toast } from "react-toastify";
import Breadcrumb from "../components/ui/Breadcrumb";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const PurchaseCoin = () => {
  const [coin, setCoin] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState({
    name: "",
    price: 0,
    quantity: 0,
    customerEmail: "",
  });

  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  const handlePlanSelect = (plan) => {
    console.log(plan);
    setSelectedPlan({
      name: plan?.name,
      price: plan?.unitPrice,
      quantity: plan?.quantity,
      customerEmail: user?.email,
    });
  };

  const handlePurchasePlan = async () => {
    if (!selectedPlan) {
      return toast.warn("Select any plan first");
    }

    let response = await axios.post(
      `${import.meta.env.VITE_API_URL}/payment/create-checkout-session`,
      selectedPlan
    );

    if (response && response.status === 200) {
      console.log(response);

      window.location.href = response.data.url;

      console.log(response.data);
    }
  };

  useEffect(() => {
    console.log(user?.email);
    fetch(`${import.meta.env.VITE_API_URL}/users/get-coin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user?.email }),
    })
      .then((res) => res.json())
      .then((data) => setCoin(data?.data?.coin));
  }, [coin, user?.email]);

  return (
    <div className=" testimonial-section p-10">
      <Breadcrumb routeName={"Purchase"} />
      <div className="text-center">
        <h3 className="text-slate-700 font-semibold text-lg ">
          Current Balance
        </h3>
        <span className="text-5xl font-bold text-slate-700 flex gap-4 items-centers justify-center pt-5">
          <span>
            {" "}
            <GiTwoCoins className="text-5xl text-orange-300" />
          </span>
          {coin}
        </span>
      </div>

      <div className="flex items-center justify-center dark:bg-gray-800  h-[520px]">
        <div className="mx-auto max-w-6xl px-12">
          <div className="flex flex-wrap justify-center gap-10">
            {plans.map((plan) => (
              <label
                className="cursor-pointer"
                key={plan?.id}
                onClick={() => handlePlanSelect(plan)}
              >
                <input type="radio" className="peer sr-only" name="pricing" />
                <div className="w-72 max-w-xl rounded-md bg-white dark:bg-gray-900 p-5 text-gray-600 dark:text-gray-300 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-green-600 peer-checked:ring-green-500 peer-checked:ring-offset-2">
                  <div className="">
                    <div className="flex justify-center mb-6">
                      <GiTwoCoins className="text-5xl text-orange-300" />
                    </div>

                    <div className="flex flex-col gap-5">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                          {plan?.name}
                        </p>
                        <div>
                          <div
                            className={`${
                              selectedPlan === plan?.id
                                ? "bg-green-100"
                                : "bg-gray-100"
                            } mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full  sm:mx-0 sm:h-10 sm:w-10`}
                          >
                            <svg
                              width={12}
                              height={12}
                              className={`${
                                selectedPlan === plan?.id
                                  ? "text-green-400"
                                  : "text-gray-400"
                              }`}
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-end justify-between">
                        <p>
                          <span className="text-base font-semibold">
                            {plan?.coins} Coin
                          </span>
                        </p>
                        <p className="text-sm font-bold">${plan?.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button
              onClick={handlePurchasePlan}
              className="text-sm bg-red-400 hover:bg-green-500 transition-all duration-300 ease-in-out px-4 py-2.5 text-white font-medium rounded-sm"
            >
              Continue to purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCoin;
