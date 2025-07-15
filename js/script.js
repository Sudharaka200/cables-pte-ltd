function showSection(sectionNumber) {
    document.querySelectorAll('.product-section').forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(`section${sectionNumber}`).classList.add('active');
}


