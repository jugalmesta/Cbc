document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('branch-modal');
    const branchList = document.getElementById('branch-list');
    const changeBranchBtn = document.getElementById('change-branch-btn');
    const currentBranchName = document.getElementById('current-branch-name');

    // 1. Render Branch Buttons inside the Modal
    function renderBranches() {
        branchList.innerHTML = '';
        cbcBranches.forEach(branch => {
            const btn = document.createElement('button');
            btn.className = 'branch-btn';
            
            let phoneHtml = branch.phone ? `<span class="wa-number">WhatsApp: +${branch.phone}</span>` : `<span class="wa-number">${branch.status}</span>`;
            
            btn.innerHTML = `
                <strong>${branch.name}</strong>
                <span>${branch.desc}</span>
                ${phoneHtml}
            `;
            
            btn.onclick = () => selectBranch(branch);
            branchList.appendChild(btn);
        });
    }

    // 2. Handle Branch Selection
    function selectBranch(branch) {
        if (branch.status === 'Opening Soon') {
            alert('This branch is opening soon. Please select another location for now.');
            return;
        }
        
        // Save to local storage for future visits
        localStorage.setItem('selectedCbcBranch', JSON.stringify(branch));
        updateUI(branch);
        modal.style.display = 'none';
    }

    // 3. Update the UI with chosen branch
    function updateUI(branch) {
        currentBranchName.textContent = branch.name;
    }

    // 4. Initial Load Logic
    renderBranches();
    
    const savedBranch = localStorage.getItem('selectedCbcBranch');
    if (savedBranch) {
        updateUI(JSON.parse(savedBranch));
    } else {
        // Show modal if it's their first time
        modal.style.display = 'flex';
    }

    // 5. Allow users to change branch later
    changeBranchBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

// 6. Global function to trigger WhatsApp order from the HTML buttons
window.initiateWhatsAppOrder = function(intention) {
    const savedBranch = localStorage.getItem('selectedCbcBranch');
    
    if (!savedBranch) {
        // If they click order but haven't selected a branch, show the modal
        document.getElementById('branch-modal').style.display = 'flex';
        return;
    }

    const branch = JSON.parse(savedBranch);
    const waLink = buildWhatsAppLink(branch.phone, intention);
    
    if (waLink !== '#') {
        window.open(waLink, '_blank');
    }
};
