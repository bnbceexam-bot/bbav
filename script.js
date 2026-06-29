document.getElementById("admissionForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const studentName = document.getElementById("name").value;
    const fatherName = document.getElementById("father").value;
    const dob = document.getElementById("dob").value;
    const mobile = document.getElementById("mobile").value;

    alert(
        "Admission Form Submitted Successfully!\n\n" +
        "Student: " + studentName +
        "\nFather: " + fatherName +
        "\nDOB: " + dob +
        "\nMobile: " + mobile
    );

    document.getElementById("admissionForm").reset();
});
