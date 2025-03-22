function checknull(txt) {
    return txt.value.trim().length === 0;
}

function validform(f) {
    if (checknull(f.fullname)) {
        alert("Fullname must not be empty");
        f.fullname.focus();
        return;
    }
    if (checknull(f.age) || isNaN(f.age.value) || !Number.isInteger(parseFloat(f.age.value))) {
        alert("Age must be a valid integer number");
        f.age.value = "";
        f.age.focus();
        return;
    }
    if (parseInt(f.age.value) <= 0 || parseInt(f.age.value) >= 200) {
        alert("Age must be between 1 and 199");
        f.age.value = "";
        f.age.focus();
        return;
    }
    if (![...f.gender].some(radio => radio.checked)) {
        alert("Gender must be selected");
        return;
    }

    // Cập nhật biểu thức chính quy để kiểm tra số điện thoại
    const phonePattern = /^(\(\d{2,4}\)\s?)?\d{3}[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!phonePattern.test(f.phone.value)) {
        alert("Phone format must be (XX) XXX-XXX, (XXX) XXX-XXXX, or XXX-XXX-XXXX");
        f.phone.value = "";
        f.phone.focus();
        return;
    }

    alert("Form submitted successfully!");
}
