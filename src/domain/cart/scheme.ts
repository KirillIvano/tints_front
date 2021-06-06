import Joi from 'joi';

export const CartSnapshotScheme = Joi.object({
    cartItems: Joi.array().items(
        Joi.object({
            productId: Joi.number().required(),
            productsCount: Joi.number().required(),
        }),
    ),
});
