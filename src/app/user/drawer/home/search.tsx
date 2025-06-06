import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import InputText from "@/src/lib/inputs/InputText";
import tw from "@/src/lib/tailwind";
import { SvgXml } from "react-native-svg";
import { IconSearchFilter } from "@/assets/icon";
import { useNavigation } from "expo-router";

const Search = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      history: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);

  const searchHistory = [
    {
      id: 1,
      title: "Fresh apple",
    },
    {
      id: 2,
      title: "Vegetables",
    },
    {
      id: 3,
      title: "Bakery",
    },
    {
      id: 4,
      title: "Beverage",
    },
    {
      id: 5,
      title: "Fresh lettuce",
    },
  ];
  // style={tw`flex-row justify-between items-center w-full`}
  return (
    <View style={tw`flex-1 h-full px-5 mt-4`}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard?.dismiss();
        }}
      >
        <View style={tw`flex-1`}>
          <View style={tw`flex-row justify-between items-center gap-2 w-full`}>
            <View style={tw`flex-1`}>
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Enter Your Username",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputText
                    value={value}
                    onChangeText={(test) => onChange(test)}
                    onBlur={onBlur}
                    touched
                    errorText={errors?.history?.message}
                    textInputProps={{
                      placeholder: "Search for product or stores...",
                    }}
                    containerStyle={tw`rounded-full w-full`}
                  />
                )}
                name="history"
              />
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  (navigation as any)?.openDrawer();
                }}
              >
                <SvgXml xml={IconSearchFilter} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={tw`flex-row justify-between items-center mt-5 `}>
            <Text style={tw`font-PoppinsSemiBold text-xl text-black`}>
              Search history
            </Text>
            <TouchableOpacity>
              <Text
                style={tw`font-PoppinsRegular text-sm text-regularText underline `}
              >
                Clear
              </Text>
            </TouchableOpacity>
          </View>

          <View style={tw`flex-row flex-wrap gap-2 mt-6`}>
            {searchHistory.map((history) => (
              <TouchableOpacity
                key={history.id}
                style={tw`bg-[#F3F5F7] rounded-xl px-4 py-2 shadow-sm`}
              >
                <Text style={tw`text-regularText font-PoppinsMedium text-sm`}>
                  {history.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Search;
