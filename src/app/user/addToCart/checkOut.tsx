import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import BackWithComponent from "@/src/lib/backHeader/BackWithCoponent";
import { Link, router } from "expo-router";

import { SvgXml } from "react-native-svg";
import {
  IconCheckout,
  IconLeftLineArrow,
  IconMuniceButton,
  IconPayment,
  IconPlaceOrder,
  IconPlusButton,
} from "@/assets/icon";
import tw from "@/src/lib/tailwind";
import { CartData } from "@/src/components/CardData";
import TButton from "@/src/lib/buttons/TButton";

const checkOut = () => {
  const [step, setStep] = React.useState(0);
  return (
    <View style={tw`flex-1`}>
      <BackWithComponent onPress={() => router.back()} title={"Checkout"} />

      <ScrollView>
        <View style={tw`mx-5`}>
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
              <View
                style={tw`w-14 h-14 rounded-full border-2 border-primary justify-center items-center`}
              >
                <SvgXml xml={IconPayment} width={24} height={24} />
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
        </View>

        <View style={tw`mx-5 mt-3`}>
          <View
            style={tw` rounded-md bg-primary flex-row justify-between items-center p-3.5`}
          >
            <Text style={tw`font-PoppinsSemiBold text-base text-white`}>
              Order id:
            </Text>
            <Text style={tw`font-PoppinsSemiBold text-base text-white`}>
              #500
            </Text>
          </View>

          <View style={tw`mt-4`}>
            {CartData.map((data) => (
              <TouchableOpacity
                key={data.id}
                style={tw`flex-row items-center p-3 rounded-2xl bg-white mb-3 shadow-lg`}
              >
                <Image
                  source={data.image}
                  style={tw`w-14 h-14 rounded-md`}
                  resizeMode="contain"
                />
                <View style={tw`ml-4`}>
                  <Text style={tw`font-PoppinsSemiBold text-base text-black`}>
                    {data.title}
                  </Text>
                  <Text
                    style={tw`font-PoppinsRegular text-sm text-regularText`}
                  >
                    {data.weight}
                  </Text>
                  <Text
                    style={tw`font-PoppinsSemiBold text-base text-primary mt-1`}
                  >
                    ${data.price}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={tw`w-full bg-[#e7e9eb]  rounded-xl mt-2`}>
            <View
              style={tw`flex-row justify-between items-center rounded-t-lg bg-white px-5 py-2`}
            >
              <Text style={tw`font-PoppinsRegular text-sm text-regularText`}>
                Delivery address
              </Text>
              <Link
                href={"/user/users/userDetails"}
                style={tw`underline font-PoppinsRegular text-[#56A5FF]`}
              >
                Change
              </Link>
            </View>
            <View style={tw`px-5 py-3`}>
              <Text style={tw`font-PoppinsSemiBold text-base text-black`}>
                Home
              </Text>
              <Text style={tw`font-PoppinsRegular text-base text-regularText`}>
                Kodiak Island
              </Text>
              <Text style={tw`font-PoppinsRegular text-base text-regularText`}>
                Alaska
              </Text>

              <Text style={tw`font-PoppinsRegular text-base text-black mb-2`}>
                Mobile:{" "}
                <Text
                  style={tw`font-PoppinsRegular text-base text-regularText`}
                >
                  {" "}
                  01254698756
                </Text>
              </Text>
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

          <View style={tw`rounded-full my-4`}>
            <TButton
              // onPress={handleSubmit(onSubmit)}
              onPress={() => router.push("/user/paymentSystem/payment")}
              title="Next"
              containerStyle={tw`rounded-full `}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default checkOut;
