import { celebrate, Segments, Joi } from 'celebrate';

const SessionValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string()
      .required()
      .length(8),
  }),
});

export default SessionValidator;
