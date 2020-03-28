import { celebrate, Segments, Joi } from 'celebrate';

const NGOValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string()
      .required()
      .email(),
    whatsapp: Joi.string()
      .required()
      .min(10)
      .max(11),
    city: Joi.string().required(),
    state: Joi.string()
      .required()
      .length(2),
  }),
});

export default NGOValidator;
