import { test, expect } from "@playwright/test";

const notes = [
  {
    title: "Sứ mệnh Mặt Trăng tiếp theo sau thành công của Artemis II là gì?",
    content:
      "Sau chuyến bay vòng quanh Mặt Trăng, NASA bước vào giai đoạn tiếp theo của chương trình Artemis, hướng tới đổ bộ và xây căn cứ trên thiên thể này.",
  },
  {
    title: "Nhiều nhân viên 'phá' AI vì sợ bị sa thải",
    content:
      "Nhiều người, đặc biệt là Gen Z, cố gắng tạo ra những lý do để ngăn công ty của mình triển khai AI vì sợ bị thay thế. ",
  },
  {
    title: "iPhone gập có thể mang tên Ultra, pin 5.800 mAh",
    content:
      "Apple có thể đã chọn tên gọi iPhone Ultra và trang bị viên pin 5.800 mAh cho mẫu điện thoại màn hình gập đầu tiên của hãng.",
  },
  {
    title: "Trung Quốc phát triển kỹ thuật tạo chip 2D nhanh 1.000 lần",
    content:
      "Nhóm nghiên cứu Đại học Công nghệ Quốc phòng Trung Quốc đạt bước tiến lớn trong sản xuất bán dẫn 2D quy mô wafer bằng kỹ thuật tổng hợp, nhanh hơn 1.000 lần so với phương pháp truyền thống. ",
  },
  {
    title: "MacBook Neo - mối đe dọa với laptop Windows giá rẻ",
    content:
      "Chất lượng hoàn thiện tốt, RAM 8 GB nhưng các tác vụ cơ bản hoạt động mượt khiến MacBook Neo được coi là mối đe dọa lớn với laptop Windows giá rẻ.",
  },
  {
    title: "Công cuộc tính toán phía sau cú hạ cánh 'hoàn hảo' của Artemis II",
    content:
      "NASA tính toán cặn kẽ để tàu Orion của Artemis II tái nhập khí quyển, giảm tốc, đáp xuống biển an toàn và chính xác đến từng phút. ",
  },
  {
    title: "Hà Nội đặt mục tiêu 100% cơ quan nhà nước ứng dụng AI",
    content:
      "Hà Nội đặt mục tiêu đến hết năm 2026, 100% cơ quan nhà nước ứng dụng AI vào chỉ đạo, điều hành, theo kế hoạch chuyển đổi số ban hành ngày 31/3.",
  },
  {
    title: "Một số AI 'bao che' nhau để tránh bị tắt",
    content:
      "Một số mô hình AI hàng đầu bị phát hiện gian lận, đánh cắp dữ liệu nhằm cứu đồng nghiệp AI khác khỏi bị tắt nguồn.",
  },
  {
    title: "Thuê bao không dùng smartphone sẽ xác thực thế nào",
    content:
      "Nhà mạng cho biết sẽ rà soát những người không dùng smartphone để hỗ trợ trực tiếp trong việc xác nhận số thuê bao và xác thực thông tin thay cho VNeID.",
  },
  {
    title: "Trung Quốc phát triển tinh thể giúp định vị không cần GPS",
    content:
      "Tinh thể mới do Trung Quốc nghiên cứu cho phép chế tạo đồng hồ hạt nhân siêu chính xác, giúp tàu ngầm, tàu vũ trụ định vị không cần GPS.",
  },
];

test("Add Personal notes", async ({ page }) => {
  await test.step("Truy cập trang home", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await expect(page).toHaveTitle(/Tài liệu học automation test/);
  });

  await test.step("click to: Bài học 4: Personal Notes ", async () => {
    await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    // await page.getByRole("link", { name: "Bài học 4: Personal Notes" }).click();
    // await expect(
    //   page.getByRole("heading", { name: "Personal Notes" }),
    // ).toBeVisible();
  });
  await test.step("Add new 10 notes", async () => {
    for (const note of notes) {
      await page.locator("//input[@id='note-title']").fill(note.title);
      await page.locator("//textarea[@id='note-content']").fill(note.content);
      await page.locator("//button[@id='add-note']").click();
    }
  });
  await test.step("search theo tiêu đề bài báo bất ky", async () => {
    await page.locator("//input[@id='search']").fill("Trung");
  });
});
