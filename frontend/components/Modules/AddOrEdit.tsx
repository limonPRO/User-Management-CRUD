"use client";
import React, { useEffect, useState } from "react";
import TextInput from "../from/TextInput"; 
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useMutation, useQuery } from "@tanstack/react-query";
import { get, post, put } from "@/lib/apiClient"; 
import { useRouter } from "next/navigation";

interface FormData {
  first_name: string;
  last_name: string;
  display_name: string;
  email: string;
  dob: Date | string | null;
  phone: string;
}

const AddOrEdit = ({ id }:{id:any}) => {
  const router = useRouter(); 

  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    display_name: "",
    email: "",
    dob: null,
    phone: "",
  });

  const {
    data: existingData,
    isLoading,
    // error,
  } = useQuery({
    queryKey: ["users", id],
    queryFn: () => get(`/users/${id}`),
    enabled: !!id,
  });

  useEffect(() => {
    if (existingData?.data) {
      const { first_name, last_name, display_name, email, dob, phone } = existingData?.data?.data;
      setFormData({
        first_name,
        last_name,
        display_name,
        email,
        dob: dob ? new Date(dob) : null, 
        phone,
      });
    }
  }, [existingData]);

  const mutation = useMutation({
    mutationFn: (data: FormData) =>
      id ? put(`/users/${id}`, data) : post("/users", data),
    onSuccess: () => {
      router.push("/"); 
    },
    onError: (error) => {
      console.error("Error saving user data:", error);
    },
  });

  // Handle input change
  const handleInputChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  // Handle date change
  const handleDateChange = (newValue: Dayjs | null) => {
    setFormData({
      ...formData,
      dob: newValue ? newValue.toDate() : null,
    });
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formattedDate = formData.dob ? dayjs(formData.dob).format("YYYY-MM-DD") : "";
    const dataToSubmit : FormData= { ...formData, dob: formattedDate  };
    mutation.mutate(dataToSubmit); 
  };

  if (isLoading) return <p>Loading...</p>; 

  return (
    <div className="mx-auto px-[127px] pt-[66px]">
      <div className="flex items-center  gap-2">
        <span className="h-[44px] w-[44px] rounded-full bg-[#86937F] text-[#ffffff] flex items-center justify-center">+</span>
        <p className="text-[#000000] font-medium text-base">Add new User</p>
      </div>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={handleSubmit} className="pt-[78px]">
        <div className="grid grid-cols-4 gap-4 mb-4">
          <TextInput label="First Name" value={formData.first_name} onChange={handleInputChange("first_name")} type="text" />
          <TextInput label="Last Name" value={formData.last_name} onChange={handleInputChange("last_name")} type="text" />
          <TextInput label="Display Name" value={formData.display_name} onChange={handleInputChange("display_name")} type="text" />
          <TextInput label="Email" value={formData.email} onChange={handleInputChange("email")} type="email" />
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4">
          <DatePicker
            label="Select Date"
            value={formData.dob ? dayjs(formData.dob) : null}
            onChange={handleDateChange}
            slots={{ textField: (params) => <TextInput {...params} label="Select Date" type="text" /> }} 
          />
          <TextInput label="Phone" value={formData.phone} onChange={handleInputChange("phone")} type="tel" />
          <div/>
          <button  className="bg-[#86937F] flex items-center justify-center h-[64px] rounded text-[#ffffff] mt-7">submit</button>
        </div>
      </form>
    </LocalizationProvider>
    </div>
  );
};

export default AddOrEdit;
