# Web Development Lab: GitHub Actions + GitHub Pages

เว็บไซต์ Static (HTML, CSS, JavaScript) ที่ deploy ขึ้น GitHub Pages อัตโนมัติด้วย GitHub Actions ทุกครั้งที่ push ไปที่ branch `main`

| รายการ | รายละเอียด |
| --- | --- |
| เว็บไซต์ | https://67160219-create.github.io/webdev-actions-lab/ |
| Repository | https://github.com/67160219-create/webdev-actions-lab |
| ผู้จัดทำ | Thanawat Phirin (67160219) |

---

## คำถามท้ายแลป

### 1) GitHub Actions แตกต่างจาก GitHub Pages อย่างไร?

GitHub Actions คือระบบรันงานอัตโนมัติเมื่อเกิดเหตุการณ์ เช่น การ push ในแลปนี้ใช้ทำหน้าที่ deploy ส่วน GitHub Pages คือบริการโฮสต์เว็บไซต์ Static ให้เปิดดูผ่าน URL ได้ สรุปคือ Actions เป็นตัวทำงาน ส่วน Pages เป็นตัวแสดงเว็บไซต์

### 2) เหตุใดจึงเลือก trigger ด้วย push ที่ branch main?

เพราะ `main` เป็น branch หลักที่ถือว่าเป็นเวอร์ชันพร้อมใช้งาน เมื่อ push ไปที่ branch นี้ เว็บไซต์จะอัปเดตตามอัตโนมัติ และไม่ต้อง deploy ทุกครั้งที่แตก branch ไปทดลองงาน

### 3) ถ้าแก้ไฟล์ในเครื่องแต่ไม่ได้ push เว็บไซต์จะเปลี่ยนหรือไม่ เพราะเหตุใด?

ไม่เปลี่ยน เพราะ GitHub Actions เริ่มทำงานจากการ push เท่านั้น การแก้ไฟล์ในเครื่องยังอยู่แค่ในเครื่อง GitHub ไม่รู้ว่ามีการแก้ไข จึงไม่เกิดการ deploy ใหม่ ตอนทำแลปผมเจอกรณีนี้จริง คือแก้สีปุ่มแล้ว แต่เว็บยังเป็นสีเดิมจนกว่าจะ commit และ push

### 4) เหตุใดโปรเจกต์ PHP + MySQL จึงไม่สามารถนำไปรันบน GitHub Pages ได้โดยตรง?

เพราะ GitHub Pages รองรับเฉพาะไฟล์ Static (HTML, CSS, JavaScript) ที่เบราว์เซอร์ประมวลผลเอง ไม่มี Server ฝั่งหลังบ้านที่รัน PHP และไม่มีฐานข้อมูล MySQL จึงต้องแยกส่วนหน้าเว็บมาไว้ที่ Pages หรือใช้ Hosting ที่รองรับ PHP

### 5) อธิบายขั้นตอนการค้นหาสาเหตุ เมื่อ Workflow มีสถานะ Failed

เมื่อ Workflow ขึ้นสถานะ Failed ให้เปิดแท็บ Actions แล้วคลิกเข้าไปที่รอบที่เป็นสีแดง จากนั้นคลิก job `deploy` เพื่อดูว่า step ไหนมีกากบาทสีแดง แล้วคลิกที่ step นั้นเพื่ออ่าน log และข้อความ error ว่าเกิดปัญหาอะไร สาเหตุที่พบบ่อยคือ YAML เยื้องผิด, ยังไม่ได้ตั้ง Settings → Pages ให้ใช้ GitHub Actions, ไม่มีไฟล์ `index.html` หรือกำหนด permissions ไม่ครบ เมื่อรู้สาเหตุแล้วก็แก้ไข จากนั้น commit และ push อีกครั้ง หรือกด Re-run all jobs ถ้าเป็นปัญหาที่แก้ในหน้า Settings