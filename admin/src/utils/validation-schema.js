import { defineRule, configure } from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import * as yup from 'yup';

// Define global rules if needed
defineRule('required', required);
defineRule('email', email);

// Configure Vee-validate
configure({
  generateMessage: ctx => {
    const messages = {
      required: `${ctx.field} is required`,
      email: `${ctx.field} must be a valid email`
    };
    return messages[ctx.rule.name] || `${ctx.field} is invalid`;
  },
  validateOnInput: false, 
  validateOnBlur:true,
  validateOnChange : false

});

export const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Email must be valid').required('Email is required'),
  });