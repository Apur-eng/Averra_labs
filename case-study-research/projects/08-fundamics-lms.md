# Case Study Research: Fundamics LMS (`fundamics_LMS_FRONTEND`)

- **Repository:** `https://github.com/Apur-eng/fundamics_LMS_FRONTEND.git`
- **Client:** Fundemics Tutorials LLP
- **Category:** Applications (Cross-Platform Learning Management System)
- **Platforms:** iOS, Android, Web (`expo start`, `react-native-web`)

## Verified Technology Stack
- **Core:** React Native `0.76.9`, Expo `~52.0.37`, React `18.3.1`, TypeScript `^5.3.3`
- **Navigation:** `@react-navigation/native` `^7.0.14`, `@react-navigation/native-stack` `^7.2.0`, `@react-navigation/bottom-tabs` `^7.2.0`
- **Native Capabilities:** `expo-secure-store`, `expo-linear-gradient`, `expo-font`, `expo-asset`, `expo-status-bar`, `react-native-safe-area-context`, `react-native-screens`
- **Testing:** Node native test runner (`node --test "tests/*.test.js"`)

## Verified Features & Modules
- **Authentication & Onboarding:** `SplashScreen`, `LoginScreen`, `RegisterScreen`, `ForgotPasswordScreen`, `ResetPasswordScreen`, `ApplicationStatusScreen`
- **Role-Based Dashboards:** `StudentDashboardScreen`, `TeacherDashboardScreen`, `AdminDashboardScreen`
- **Academic & Student Modules:**
  - `StudentAttendanceScreen` & `AttendanceCalendarPreview`
  - `StudentResultsScreen`, `TestResultDetailSheet`, `StudentResultDocumentsCard`, `AcademicExaminationRecord`
  - `StudentStudyMaterialScreen`, `StudentStudyResourcesCard`
  - `NotificationsScreen`, `StudentNoticesCard`, `CompactNoticesRow`
  - `StudentProfileScreen`, `assignments`, `classes`, `exams`, `fees`, `students`

## Design System
- **Academic Blue Light Theme:** `#075B86` (deep academic blue), `#087BAF` (CTA blue), `#F5F9FC` (canvas), `#E8F6FC` (chip surface), `#15966A` (present green), `#D94F55` (absent red), `#C69A45` (academic gold).
