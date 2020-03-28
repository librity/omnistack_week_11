import { celebrate, Segments, Joi } from 'celebrate';

const AuthenticationValidator = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
});

export default AuthenticationValidator;
