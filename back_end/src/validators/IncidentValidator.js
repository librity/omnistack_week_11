import { celebrate, Segments, Joi } from 'celebrate';

const IncidentValidator = {
  index: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),

  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number()
        .required()
        .min(1)
        .max(1000),
    }),
  }),

  destroy: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
};

export default IncidentValidator;
