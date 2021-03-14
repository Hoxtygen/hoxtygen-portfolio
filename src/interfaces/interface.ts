export interface FormValues {
    name: string,
    email: string,
    message: string, 
}

export interface ContactFormProps {
    handleSubmit: (arg: FormValues) => void;
  }
