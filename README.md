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
4. Gọi API từ server trong `/src/rtk/services/`, đọc ví dụ `/src/rtk/services/auth.ts`
5. Xử lý service trong `/src/rtk/dispatches/`, đọc ví dụ `/src/rtk/dispatches/auth.ts`
6. Gọi dispatch trong reactjs như ví dụ bên dưới:
```
import { useAppDispatch } from '@/rtk/hooks'
const dispatch = useAppDispatch()

const handleLogin = useCallback(
    (formData: { email: string; password: string }) => {
        dispatch(login(formData, notifications))
    },
    [dispatch]
)
```
7. Lấy data đã dispatch như ví dụ bên dưới:
```
import { useAppSelector } from '@/rtk/hooks'
import { selectAuthentication } from '@/rtk/slices/auth'
const auth = useAppSelector(selectAuthentication)

console.log(auth)
```