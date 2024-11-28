async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '09b2fa6081c94b4'; // đã cập nhật git, đảo api không còn giá trị, api đã tắt
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            // Truyền giá trị thành phố lại FE thông qua id "city"
            document.getElementById("city").textContent = `${data.name}, ${data.sys.country}`;

            // Truyền giá trị nhiệt độ cho FE thông qua id "nhietdo"
            document.getElementById("nhietdo").innerHTML = `${data.main.temp}
            <span style="font-size: 20px;">&deg;C</span>`;

            // Truyền giá trị độ ẩm cho FE thông qua id "humidity"
            document.getElementById("humidity").textContent = `${data.main.humidity}%`;

            // Truyền giá trị tốc độ gió cho FE qua id "wind"
            document.getElementById("wind").textContent = `${data.wind.speed} m/s`;

            // Truyền giá trị mây cho FE qua id "may"
            document.getElementById("may").textContent = `${data.weather[0].description}`;
        } else {
            document.getElementById('weatherInfo').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        // document.getElementById('weatherInfo').innerHTML = `<p>Đã xảy ra lỗi khi lấy dữ liệu thời tiết.</p>`;
        alert("Thành phố bạn nhập sai chính tả, hãy nhập đúng tên thành phố của mình")
    }
}


// Giá trị ngày tháng
function displayCurrentDate() {
    const currentDateElement = document.getElementById('date');
    const currentDate = new Date();
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('vi-VN', options);
    
    currentDateElement.textContent = formattedDate;
}

// Gọi hàm displayCurrentDate() khi trang web được tải hoặc khi bạn muốn hiển thị ngày tháng.
displayCurrentDate();



// Lời Chào cho từng thời gian trong ngày

// Tạo biến kiểm tra thời gian hiện tại
const time = new Date();
const realTime = time.getHours();


// Bắt đầu sử dụng if else để tùy chọn lời chào

function actionHello() {
    // biến màu cho body
    let body = document.getElementById("body");

    if(realTime >= 6 && realTime < 12){
        document.getElementById("hello").innerHTML = "GOOD MORNING";
        document.getElementById("hello2").innerHTML = "Chúc bạn một ngày mới tràn đầy năng lượng tích cực nhé !";
        
    }

    else if (realTime > 12 && realTime < 18){
        document.getElementById("hello").innerHTML = "GOOD AFTERNOON";
        document.getElementById("hello2").innerHTML = "Buổi chiều hôm nay của bạn thế nào, ổn chứ ?"
        body.style.background = "linear-gradient(to left, #ffd97a, #ff9224)";

    }
    else{
        document.getElementById("hello").innerHTML = "GOOD EVENING";
        document.getElementById("hello2").innerHTML = "Chúc bạn một buổi tối, thật nhẹ nhàng bên người thân!";
        body.style.background = "linear-gradient(to left, #cecece, #000000)";

    }
}
actionHello();


//  Lấy giá trị trạng thái thời tiết để làm hình ảnh mô phỏng thời tiết.
// Chữa cháy, bằng cách lấy giá trị chuỗi, trong kết quả của trường "thời tiết"
// Chứ k lấy đc kết quả từ API trực tiếp

const weather_img = document.getElementById("may").value;

function weath_img_action() {
    // trời mưa, sấm chớp
    if (false) {
        document.getElementById("img_story").setAttribute("src", "https://cdn.pixabay.com/animation/2022/09/17/16/20/16-20-08-700_512.gif")
    }
    
    // trời mưa
    else if(false) {
        document.getElementById("img_story").setAttribute("src", "https://cdn.pixabay.com/animation/2024/03/15/11/29/11-29-43-352_512.gif")
    }

    // Trời nhiều mây
    else if(false) {
        document.getElementById("img_story").setAttribute("src", "https://cdn.pixabay.com/animation/2022/09/17/16/20/16-20-08-700_512.gif")
    }

    // trời bình thường
    else{
        document.getElementById("img_story").setAttribute("src", "https://static.wixstatic.com/media/f9b341_db75bd14a4364059bd715408e638220f~mv2.gif")
    }
}

weath_img_action();

