import { helpers } from 'vuelidate/lib/validators'

export const supportedFileType = value => {
  // If value is not required and value is empty, then returns true because field is valid
  if(!helpers.req(value)) { return true }

  const allowedFormats = ['jpg', 'png', 'jpeg', 'svg']
  // Splits URL where there is a '.', and gets last item which will be file extension
  const extension = value.split('.').pop();
  // If extension includes 'jpg', 'png', 'jpeg', 'svg', return true. Else return false.
  return allowedFormats.includes(extension);
}