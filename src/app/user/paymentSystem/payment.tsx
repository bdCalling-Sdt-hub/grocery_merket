import { View, Text, Image } from "react-native";
import React from "react";
import BackWithComponent from "@/src/lib/backHeader/BackWithCoponent";
import { Link, router } from "expo-router";
import tw from "@/src/lib/tailwind";
import { SvgXml } from "react-native-svg";
import {
  IconCheckout,
  IconLeftLineArrow,
  IconMasterCard,
  IconPaymentSelected,
  IconPlaceOrder,
} from "@/assets/icon";
import TButton from "@/src/lib/buttons/TButton";

const payment = () => {
  return (
    <View style={tw`flex-1`}>
      <BackWithComponent onPress={() => router.back()} title={"Payment"} />
      <View style={tw`mx-5 flex-1 justify-between`}>
        <View>
          <View style={tw`flex-row items-center justify-between px-4 py-4`}>
            {/* Step 1: Checkout */}
            <View style={tw`items-center`}>
              <View style={tw`border-2 border-primary rounded-full`}>
                <View
                  style={tw`w-14 h-14 rounded-full bg-primary justify-center items-center m-1`}
                >
                  <SvgXml xml={IconCheckout} width={24} height={24} />
                </View>
              </View>
              <Text style={tw`text-center text-black mt-2`}>Checkout</Text>
            </View>
            {/* Arrow */}
            <View>
              <SvgXml xml={IconLeftLineArrow} />
            </View>
            {/* Step 2: Payment */}
            <View style={tw`items-center`}>
              <View style={tw`border-2 border-primary rounded-full`}>
                <View
                  style={tw`w-14 h-14 rounded-full  bg-primary justify-center items-center m-1`}
                >
                  <SvgXml xml={IconPaymentSelected} width={24} height={24} />
                </View>
              </View>
              <Text style={tw`text-center text-black mt-2`}>Payment</Text>
            </View>
            {/* Arrow */}
            <View>
              <SvgXml xml={IconLeftLineArrow} />
            </View>
            {/* Step 3: Place Order */}
            <View style={tw`items-center`}>
              <View
                style={tw`w-14 h-14 rounded-full border-2 border-primary justify-center items-center`}
              >
                <SvgXml xml={IconPlaceOrder} width={24} height={24} />
              </View>
              <Text style={tw`text-center text-black mt-2`}>Place order</Text>
            </View>
          </View>

          <View style={tw`w-full bg-[#e7e9eb]  rounded-xl mt-4`}>
            <View style={tw`flex-row  rounded-t-lg bg-white px-5 py-2`}>
              <Text style={tw`font-PoppinsRegular text-sm text-regularText`}>
                Order bill
              </Text>
            </View>
            <View style={tw`px-5 py-3`}>
              <View style={tw`flex-row justify-between items-center`}>
                <Text
                  style={tw`font-PoppinsRegular text-base text-regularText`}
                >
                  Total items:
                </Text>
                <Text
                  style={tw`font-PoppinsRegular text-base text-regularText`}
                >
                  3
                </Text>
              </View>
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <Text
                  style={tw`font-PoppinsRegular text-base text-regularText`}
                >
                  Sub total:
                </Text>
                <Text
                  style={tw`font-PoppinsRegular text-base text-regularText`}
                >
                  $50.55
                </Text>
              </View>
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <Text
                  style={tw`font-PoppinsRegular text-base text-regularText`}
                >
                  Delivery charge:
                </Text>
                <Text
                  style={tw`font-PoppinsRegular text-base text-regularText`}
                >
                  $4.45
                </Text>
              </View>
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <Text
                  style={tw`font-PoppinsRegular text-base text-regularText`}
                >
                  Tax:
                </Text>
                <Text
                  style={tw`font-PoppinsRegular text-base text-regularText`}
                >
                  $0.5
                </Text>
              </View>
              {/*  ====== border bottom ---------- */}
              <View style={tw`w-full mb-2`}>
                <Text
                  style={tw`w-full mx-auto border-b border-regularText  `}
                ></Text>
              </View>

              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`font-PoppinsSemiBold text-lg text-black`}>
                  Total:
                </Text>
                <Text style={tw`font-PoppinsSemiBold text-lg text-black`}>
                  $55.05
                </Text>
              </View>
            </View>
          </View>

          <View style={tw`mt-4`}>
            <Text style={tw`font-PoppinsSemiBold text-base text-black`}>
              Payment
            </Text>
            <Text style={tw`border-b border-gray-800`}></Text>

            <View
              style={tw`flex-row items-center px-5 py-4 rounded-xl bg-[#eceff1] mb-3 shadow-md mt-5`}
            >
              <View
                style={tw`w-14 h-14 flex justify-center items-center bg-white rounded-full shadow-sm`}
              >
                <SvgXml xml={IconMasterCard} style={tw`w-16 h-16 rounded-md`} />
              </View>
              <View style={tw`ml-4`}>
                <Text style={tw`font-PoppinsSemiBold text-base text-black`}>
                  Mastercard
                </Text>
                <Text style={tw`font-PoppinsRegular text-sm text-black`}>
                  **** **** **** 4568
                </Text>
                <View style={tw`flex-row gap-7 items-center mt-1`}>
                  <Text style={tw`font-PoppinsMedium text-sm text-black`}>
                    Exp: 06/26
                  </Text>
                  <Text style={tw`font-PoppinsMedium text-sm text-black`}>
                    CVV: 123
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={tw`w-full flex justify-end items-end mt-3`}>
            <Link
              href={"/user/paymentSystem/myCard"}
              style={tw`underline font-PoppinsRegular text-sm text-primary `}
            >
              Change
            </Link>
          </View>
        </View>

        <View style={tw`rounded-full my-4`}>
          <TButton
            // onPress={handleSubmit(onSubmit)}
            onPress={() => router.push("/user/paymentSystem/placeOrder")}
            title="Next"
            containerStyle={tw`rounded-full `}
          />
        </View>
      </View>
    </View>
  );
};

export default payment;
