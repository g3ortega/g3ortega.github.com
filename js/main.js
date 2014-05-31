// Some validations over contact form

$("#contact-form").validate({
	rules: {
		name: "required",
		email: {
			required: true,
			email: true
		},
		subject: "required",
		message: "required"
		}
});
