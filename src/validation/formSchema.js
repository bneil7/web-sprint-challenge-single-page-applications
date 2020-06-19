import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    name: Yup
        .string(),
    pizza: Yup
        .string()
})

export default formSchema