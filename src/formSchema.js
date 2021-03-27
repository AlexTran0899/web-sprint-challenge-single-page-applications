import * as yup from "yup"

export default yup.object().shape({
name: yup.string().required('name is required').min(2, ``),
size: yup.string(),
sauce: yup.string(),
Pepperoni:yup.string(),
Sausage:yup.string(),
CanadianBacon:yup.string(),
SpicyItalianSausage:yup.string(),
GrilledChicken:yup.string(),
Onions:yup.string(),
GreenPepper:yup.string(),
DicedTomatos:yup.string(),
BlackOlives:yup.string(),
RoastedGarlic:yup.string(),
ArthichokeHeart:yup.string(),
ThreeCheese:yup.string(),
Pineapple:yup.string(),
ExtraCheese:yup.string(),
GluetenFreeCrust:yup.string(),
specialInstruction:yup.string(),
})
