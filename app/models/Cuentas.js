import { Schema, model, models } from "mongoose";

const accountSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "Usuario",
		required: true
	},
	type: String,
	provider: String,
	providerAccountId: String,
	refresh_token: String, //NO OBLIGATORIO, no lo da google
	access_token: String,
	expires_at: Number,
	token_type: String,
	scope: String,
	id_token: String,
	session_state: String // NO OBLIGATORIO, no lo da google
});

accountSchema.index({ provider: 1, providerAccountId: 1 }, { unique: true });

const Cuenta = models.Cuenta || model("Cuenta", accountSchema);
export default Cuenta;
