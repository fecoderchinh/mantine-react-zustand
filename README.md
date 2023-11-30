# Mantine + Vite + Vanilla extract template

[Documentation](https://mantine.dev/styles/vanilla-extract/)

# SOURCE FRONTEND REACTJS SIÊU CẤP VIP PRO 👌

# CÁC THAO TÁC QUAN TRỌNG

1. Cài thư viện
```
pnpm i
```
2. Chạy development mode
```
pnpm dev
```
3. Build source code
```
pnpm build
```
4. Test dự án
```
pnpm test
```
5. Fix lỗi format code
```
pnpm prettier:write
```

# LƯU Ý

1. Tất cả components phải đưa vào `/src/components/ComponentName`
2. Lưu tên component dạng `/src/components/ComponentName/ComponentName.tsx`
3. Tạo 1 file test đơn giản theo dạng `/src/components/ComponentName/ComponentName.test.tsx`, có thể tham khảo test cơ bản ở component `Welcome.test.tsx`
4. Gọi API từ server trong `/src/services/`, đọc ví dụ `/src/services/auth.ts`
5. Xử lý service trong `/src/store/`, đọc ví dụ `/src/store/auth.ts`
6. Gọi dispatch trong reactjs như ví dụ bên dưới:
```
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/auth'
import { getResponseError } from '@/helpers/transformErrorMessage'

const handleLogin = async (_formData: { email: string; password: string }) => {
    await auth.login(_formData.email, _formData.password)
        .then((res) => {
        if (res?.isAuthenticated) {
            notifications.show({
                title: 'Success',
                message: 'Login successfully!',
                color: 'green',
            })
            navigate('/welcome')
        } else {
            notifications.show({
                title: 'Error occurred',
                message: getResponseError(res?.error),
                color: 'red',
            })
        }

        })
}
```
7. Lấy data đã dispatch như ví dụ bên dưới:
```
import { useAuthStore } from '@/store/auth'

console.log(auth)
```