console.log("Aspura Sarpanch Candidate Portal loaded successfully.");
/* ========================================
   FORM PAGES
======================================== */

.form-container {
    min-height: calc(100vh - 75px);
    padding: 45px 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.form-card {
    width: 100%;
    max-width: 700px;
    background: #ffffff;
    padding: 35px;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
}

.form-card h2 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 12px;
    color: #1d4ed8;
}

.form-intro {
    text-align: center;
    color: #666;
    line-height: 1.6;
    margin-bottom: 30px;
}

.form-card label {
    display: block;
    font-weight: bold;
    margin: 18px 0 7px;
    color: #333;
}

.form-card input[type="text"],
.form-card input[type="email"],
.form-card input[type="password"],
.form-card input[type="tel"],
.form-card input[type="date"],
.form-card input[type="file"],
.form-card textarea {
    width: 100%;
    padding: 13px 14px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 15px;
    font-family: inherit;
    background: #fff;
}

.form-card textarea {
    resize: vertical;
    min-height: 100px;
}

.form-card input:focus,
.form-card textarea:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.10);
}

.form-card input[readonly] {
    background: #f3f4f6;
    cursor: not-allowed;
}

.form-card small {
    display: block;
    margin-top: 6px;
    color: #777;
    font-size: 12px;
}

.submit-btn {
    width: 100%;
    margin-top: 25px;
    border: none;
    background: #1d4ed8;
    color: white;
    font-weight: bold;
}

.submit-btn:hover {
    background: #163ca5;
}

.checkbox-row {
    display: flex !important;
    align-items: center;
    gap: 10px;
    margin-top: 20px !important;
    font-weight: normal !important;
}

.checkbox-row input {
    width: 18px;
    height: 18px;
    cursor: pointer;
}

.checkbox-row span {
    color: #444;
    font-size: 14px;
}

.register-link {
    text-align: center;
    margin-top: 25px;
    padding-top: 20px;
    border-top: 1px solid #e5e7eb;
}

.register-link p {
    color: #666;
    margin-bottom: 10px;
}

.register-link .secondary-btn {
    border: 1px solid #1d4ed8;
    color: #1d4ed8;
    background: white;
}

.register-link .secondary-btn:hover {
    background: #eff6ff;
}

#message {
    margin-top: 18px;
    text-align: center;
    line-height: 1.6;
}

#statusMessage {
    margin-bottom: 20px;
}

.status-box {
    padding: 13px 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    line-height: 1.5;
}

.status-box.pending {
    background: #fff7ed;
    color: #9a3412;
    border: 1px solid #fed7aa;
}

.status-box.approved {
    background: #f0fdf4;
    color: #166534;
    border: 1px solid #bbf7d0;
}

.status-box.hidden {
    background: #fef2f2;
    color: #991b1b;
    border: 1px solid #fecaca;
}

#currentPhoto {
    margin-top: 12px;
}

#currentPhoto p {
    color: #555;
    font-size: 13px;
    margin-bottom: 5px;
}


/* ========================================
   MOBILE FORM
======================================== */

@media (max-width: 700px) {

    .form-container {
        padding: 25px 12px;
    }

    .form-card {
        padding: 22px 18px;
        border-radius: 12px;
    }

    .form-card h2 {
        font-size: 25px;
    }

    .form-intro {
        font-size: 14px;
    }

    .form-card input[type="text"],
    .form-card input[type="email"],
    .form-card input[type="password"],
    .form-card input[type="tel"],
    .form-card input[type="date"],
    .form-card input[type="file"],
    .form-card textarea {
        font-size: 16px;
        padding: 12px;
    }

    .submit-btn {
        padding: 14px;
        font-size: 16px;
    }

}
