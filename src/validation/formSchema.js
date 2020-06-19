import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(2, 'Name must be 2 characters or longer')
        .required('Name field required!'),
    pizza: Yup
        .string()
        .oneOf(['pepperoni, cheese, combo, veggie']),
    size: Yup
        .string()
        .oneOf(['small, medium, large, XL'])
        .required('Please choose a size!'),
    instructions: Yup
        .string()
})

export default formSchema