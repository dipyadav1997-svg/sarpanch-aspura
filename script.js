// ========================================
// ASPURA SARPANCH CANDIDATE PORTAL
// PUBLIC CANDIDATE LIST
// ========================================

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

document.addEventListener("DOMContentLoaded", loadApprovedCandidates);


async function loadApprovedCandidates() {

    const candidateList =
        document.getElementById("candidateList");

    if (!candidateList) return;


    candidateList.innerHTML = `
        <div class="empty-message">
            <div class="empty-icon">⏳</div>
            <h3>उम्मीदवारों की जानकारी लोड हो रही है...</h3>
            <p>कृपया कुछ क्षण प्रतीक्षा करें।</p>
        </div>
    `;


    try {

        const { data, error } = await supabaseClient
            .from("public_candidates")
            .select("*")
            .order("created_at", {
                ascending: false
            });


        if (error) {
            console.error(error);
            throw error;
        }


        if (!data || data.length === 0) {

            candidateList.innerHTML = `
                <div class="empty-message">

                    <div class="empty-icon">👤</div>

                    <h3>
                        अभी कोई उम्मीदवार उपलब्ध नहीं है
                    </h3>

                    <p>
                        Admin verification के बाद
                        उम्मीदवार यहाँ दिखाई देंगे।
                    </p>

                </div>
            `;

            return;
        }


        candidateList.innerHTML = "";


        data.forEach(candidate => {

            const age = calculateAge(candidate.dob);


            // ========================================
            // PHOTO URL
            // ========================================

            let photoHTML = `
                <div class="candidate-photo-placeholder">
                    👤
                </div>
            `;


            if (candidate.photo_path) {
    let photoUrl = candidate.photo_path;

    // अगर database में पूरा HTTPS URL है
    // तो उसे सीधे use करेंगे
    if (!/^https?:\/\//i.test(photoUrl)) {
        const {
            data: photoData
        } = supabaseClient
            .storage
            .from("candidate-photos")
            .getPublicUrl(photoUrl);

        photoUrl = photoData?.publicUrl || "";
    }

    if (photoUrl) {
        photoHTML = `
            <img
                src="${photoUrl}"
                alt="Candidate Photo"
                class="candidate-photo"
                loading="lazy"
                onerror="this.style.display='none';"
            >
        `;
    }
}


            // ========================================
            // CARD
            // ========================================

            const card =
                document.createElement("div");

            card.className =
                "candidate-card";


            card.innerHTML = `

                <div class="candidate-card-photo">

                    ${photoHTML}

                </div>


                <div class="candidate-card-content">

                    <h3>
                        ${escapeHtml(candidate.full_name)}
                    </h3>


                    <div class="candidate-info">

                        <p>
                            <strong>📍 पता:</strong>
                            ${escapeHtml(candidate.address)}
                        </p>


                        <p>
                            <strong>🎂 जन्म तिथि:</strong>
                            ${formatDate(candidate.dob)}
                        </p>


                        <p>
                            <strong>👤 आयु:</strong>
                            ${age} वर्ष
                        </p>


                        <p>
                            <strong>🎓 शैक्षणिक योग्यता:</strong>
                            ${escapeHtml(candidate.education)}
                        </p>

                    </div>


                    <div class="development-plan">

                        <h4>
                            🌱 गाँव के विकास की प्राथमिकताएँ
                        </h4>

                        <p>
                            ${escapeHtml(
                                candidate.development_plan
                            )}
                        </p>

                    </div>

                </div>

            `;


            candidateList.appendChild(card);

        });


    } catch (error) {

        console.error(
            "Candidate loading error:",
            error
        );


        candidateList.innerHTML = `

            <div class="empty-message">

                <div class="empty-icon">
                    ⚠️
                </div>

                <h3>
                    जानकारी लोड नहीं हो सकी
                </h3>

                <p>
                    कृपया कुछ समय बाद पुनः प्रयास करें।
                </p>

            </div>

        `;

    }

}


// ========================================
// AGE
// ========================================

function calculateAge(dob) {

    if (!dob) return "-";


    const birthDate =
        new Date(dob);

    const today =
        new Date();


    let age =
        today.getFullYear() -
        birthDate.getFullYear();


    const monthDifference =
        today.getMonth() -
        birthDate.getMonth();


    if (
        monthDifference < 0 ||
        (
            monthDifference === 0 &&
            today.getDate() < birthDate.getDate()
        )
    ) {
        age--;
    }


    return age;
}


// ========================================
// DATE
// ========================================

function formatDate(dateString) {

    if (!dateString) return "-";


    const date =
        new Date(dateString);


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    );
}


// ========================================
// SECURITY
// ========================================

function escapeHtml(value) {

    if (
        value === null ||
        value === undefined
    ) {
        return "";
    }


    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
