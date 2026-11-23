document.addEventListener('DOMContentLoaded', () => {
    /* ================= BÀI 17: ALERT & PROMPT ================= */
    const btnAlert = document.getElementById('btnShowAlert');
    const btnPrompt = document.getElementById('btnShowPrompt');
    const promptOutput = document.getElementById('promptOutput');

    if (btnAlert) {
        btnAlert.addEventListener('click', () => {
            alert('Xin chào! Đây là hộp thoại thông báo Alert trong Bài tập 17.');
        });
    }

    if (btnPrompt && promptOutput) {
        btnPrompt.addEventListener('click', () => {
            const fullName = prompt('Nhập họ và tên của bạn:', 'Nguyễn Quốc Thắng');
            if (fullName !== null && fullName.trim() !== '') {
                promptOutput.textContent = 'Xin chào sinh viên: ' + fullName.trim() + '!';
            } else {
                promptOutput.textContent = 'Bạn đã hủy hoặc chưa nhập nội dung.';
            }
        });
    }

    /* ================= BÀI 18: TÍNH TỔNG HAI SỐ ================= */
    const btnSum = document.getElementById('btnCalcSum');
    if (btnSum) {
        btnSum.addEventListener('click', () => {
            const a = parseFloat(document.getElementById('inputA').value);
            const b = parseFloat(document.getElementById('inputB').value);
            const sumOutput = document.getElementById('sumOutput');

            if (isNaN(a) || isNaN(b)) {
                sumOutput.textContent = 'Vui lòng nhập đầy đủ hai số hợp lệ!';
                return;
            }
            sumOutput.textContent = `Kết quả: ${a} + ${b} = ${a + b}`;
        });
    }

    /* ================= BÀI 19: ĐỔI MÀU NỀN NGẪU NHIÊN ================= */
    const btnRandomBg = document.getElementById('btnRandomBg');
    const btnResetBg = document.getElementById('btnResetBg');
    const bgCodeText = document.getElementById('bgCodeText');

    if (btnRandomBg && bgCodeText) {
        btnRandomBg.addEventListener('click', () => {
            const randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
            document.body.style.backgroundColor = randomHex;
            bgCodeText.textContent = 'Mã màu nền hiện tại: ' + randomHex;
        });
    }

    if (btnResetBg && bgCodeText) {
        btnResetBg.addEventListener('click', () => {
            document.body.style.backgroundColor = '#f1f5f9';
            bgCodeText.textContent = 'Mã màu nền hiện tại: #F1F5F9';
        });
    }

    /* ================= BÀI 20: ĐỒNG HỒ & COUNTDOWN TIMER ================= */
    const clockDisplay = document.getElementById('liveClock');
    if (clockDisplay) {
        const tickClock = () => {
            clockDisplay.textContent = new Date().toLocaleTimeString('vi-VN');
        };
        tickClock();
        setInterval(tickClock, 1000);
    }

    const btnStartTimer = document.getElementById('btnStartTimer');
    const btnStopTimer = document.getElementById('btnStopTimer');
    const timerDisplay = document.getElementById('timerDisplay');
    let countdownInterval = null;

    if (btnStartTimer && timerDisplay) {
        btnStartTimer.addEventListener('click', () => {
            clearInterval(countdownInterval);
            let seconds = parseInt(document.getElementById('countdownInput').value, 10);

            if (isNaN(seconds) || seconds <= 0) {
                timerDisplay.textContent = 'Vui lòng nhập số giây lớn hơn 0!';
                return;
            }

            timerDisplay.textContent = `Thời gian còn lại: ${seconds} giây`;
            countdownInterval = setInterval(() => {
                seconds--;
                if (seconds > 0) {
                    timerDisplay.textContent = `Thời gian còn lại: ${seconds} giây`;
                } else {
                    clearInterval(countdownInterval);
                    timerDisplay.textContent = 'Hết thời gian đếm ngược!';
                }
            }, 1000);
        });
    }

    if (btnStopTimer) {
        btnStopTimer.addEventListener('click', () => {
            clearInterval(countdownInterval);
        });
    }

    /* ================= BÀI 21: KIỂM TRA SỐ NGUYÊN ================= */
    const btnCheckNumber = document.getElementById('btnCheckNumber');
    if (btnCheckNumber) {
        btnCheckNumber.addEventListener('click', () => {
            const val = parseInt(document.getElementById('numberInput').value, 10);
            const numberOutput = document.getElementById('numberOutput');

            if (isNaN(val)) {
                numberOutput.textContent = 'Vui lòng nhập một số nguyên hợp lệ!';
                return;
            }

            const evenOdd = val % 2 === 0 ? 'số chẵn' : 'số lẻ';
            let isPrime = val >= 2;
            for (let i = 2; i <= Math.sqrt(val); i++) {
                if (val % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            const primeText = isPrime ? 'là số nguyên tố' : 'không phải số nguyên tố';
            numberOutput.textContent = `Số ${val} là ${evenOdd} và ${primeText}.`;
        });
    }

    /* ================= BÀI 22: DANH SÁCH GHI CHÚ ĐỘNG ================= */
    const btnAddNote = document.getElementById('btnAddNote');
    const noteInput = document.getElementById('noteInput');
    const noteList = document.getElementById('noteList');

    if (btnAddNote && noteInput && noteList) {
        btnAddNote.addEventListener('click', () => {
            const text = noteInput.value.trim();
            if (!text) return;

            const li = document.createElement('li');
            li.textContent = text;
            noteList.appendChild(li);
            noteInput.value = '';
            noteInput.focus();
        });
    }

    /* ================= BÀI 24: ĐÈN KÉO QUÂN 3D ================= */
    const lanternDrum = document.getElementById('lanternDrum');
    const statusLabel = document.getElementById('lanternStatus');
    const btnBegin = document.getElementById('btnBeginSpin');
    const btnHalt = document.getElementById('btnHaltSpin');
    const btnContinue = document.getElementById('btnContinueSpin');
    const panels = document.querySelectorAll('.lantern-panel');

    if (lanternDrum && statusLabel) {
        let isStoppedByButton = false;

        // Nút "Bắt đầu quay": khởi động lại vòng quay từ đầu
        btnBegin.addEventListener('click', () => {
            isStoppedByButton = false;
            lanternDrum.classList.remove('paused-by-btn');
            lanternDrum.style.animation = 'none';
            void lanternDrum.offsetWidth;
            lanternDrum.style.animation = 'rotateLantern 15s linear infinite';
            statusLabel.textContent = 'Trạng thái: Đã bắt đầu quay lại từ đầu';
        });

        // Nút "Dừng quay": tạm dừng tại góc hiện tại
        btnHalt.addEventListener('click', () => {
            isStoppedByButton = true;
            lanternDrum.classList.add('paused-by-btn');
            statusLabel.textContent = 'Trạng thái: Đã dừng quay';
        });

        // Nút "Quay tiếp": tiếp tục quay từ vị trí đang dừng
        btnContinue.addEventListener('click', () => {
            isStoppedByButton = false;
            lanternDrum.classList.remove('paused-by-btn');
            statusLabel.textContent = 'Trạng thái: Đang quay tiếp';
        });

        // Dừng quay khi rê chuột vào hình ảnh và quay tiếp khi rê chuột ra
        panels.forEach((panel, idx) => {
            panel.addEventListener('mouseenter', () => {
                lanternDrum.style.animationPlayState = 'paused';
                statusLabel.textContent = `Trạng thái: Đang dừng xem Mặt ${idx + 1} (rê chuột ra ngoài để quay tiếp)`;
            });

            panel.addEventListener('mouseleave', () => {
                if (!isStoppedByButton) {
                    lanternDrum.style.animationPlayState = 'running';
                    statusLabel.textContent = 'Trạng thái: Đèn đang quay';
                } else {
                    statusLabel.textContent = 'Trạng thái: Đã dừng quay';
                }
            });
        });
    }
});