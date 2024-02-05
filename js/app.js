var fut = new Date("feb 05, 2024 18:33:00").getTime();

let x = setInterval(function stime() {
    var now = new Date().getTime();
    var D = fut - now;
    
    var days = Math.floor(D / (1000 * 60 * 60 * 24));
    var hours = Math.floor((D % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((D % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((D % (1000 * 60)) / 1000);

    // Hiển thị số 0 trước cho các giá trị nhỏ hơn 10
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (D < 0) {
        document.querySelector(".wrapper").style.display = "none";
    
        // Lấy đối tượng audio
        var audio = document.getElementById('song');
    
        // Thay đổi nguồn audio thành bài nhạc mới
        audio.src = '/image/nhac.mp3';
        
        // Kiểm tra nếu audio chưa được phát và có hỗ trợ autoplay
        if (audio.paused && 'autoplay' in audio) {
            audio.play();
        }
    
        clearInterval(x); // Dừng đồng hồ đếm ngược khi thời gian đã hết
        return;
    }
    

}, 1000); // Thay đổi 0.1 thành 1000 để cập nhật mỗi giây

window.addEventListener('load', function() {
    // Lấy đối tượng audio
    var audio = document.getElementById('song');

    // Tự động phát nhạc
    audio.play();
});