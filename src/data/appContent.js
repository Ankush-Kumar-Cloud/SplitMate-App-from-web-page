// Single place to change the download link.
export const APK_URL = 'https://expo.dev/artifacts/eas/WQN5UPROVUrpGv9KXITZRQOdfsS1atQpKMB_cpBhVsY.apk'

// Contact + privacy policy are placeholders: fill in before public launch.
export const PRIVACY_URL = '' // e.g. '/privacy.html'
export const CONTACT_EMAIL = '' // e.g. 'hello@yourdomain.com'

export const DEVELOPER = 'Ankush Kumar'
export const nav = [['Home', '#home'], ['Features', '#features'], ['How It Works', '#how'], ['FAQ', '#faq']]

export const problems = [
  ['Who paid for what?', 'Shared bills get paid by whoever is closest to the counter, and nobody remembers later.'],
  ['Rent, groceries, household', 'Recurring shared costs are easy to lose track of across several people.'],
  ['Group trips', 'Fuel, stays and meals add up fast when everyone takes a turn paying.'],
  ['Manual maths', 'Calculator splits and notes-app lists lead to forgotten amounts.'],
  ['Multiple payers', 'When several people pay, working out the balance by hand gets messy.'],
]

// Based on the app screenshots (Expenses, Settlement) plus the original brief (login/registration).
// QR scanning is intentionally omitted until verified.
export const features = [
  ['Receipt', 'Group expense tracking', 'Add expenses to a group such as flatmates, and edit or delete them later.'],
  ['Users', 'Member-wise totals', 'See each member’s monthly total, today’s spending and number of entries.'],
  ['Search', 'Search, filter and categories', 'Find expenses quickly and tag them with categories such as Food.'],
  ['BarChart3', 'Activity, Budgets, Analytics, Monthly', 'Separate tabs inside each group to review spending in different ways.'],
  ['Scale', 'Settlement suggestions', 'Shows the minimum payments needed to even things out, with who pays whom.'],
  ['CheckCircle2', 'Mark Paid', 'Mark a suggested payment as paid so the group stays up to date.'],
  ['UserCheck', 'Account registration and login', 'Create an account and sign in.'],
]

export const steps = [
  ['Download the APK', 'Tap Download APK on this page. Your browser may ask you to confirm the download.'],
  ['Install on Android', 'Open the downloaded file. If Android asks, allow your browser or file manager to install apps from this source, then tap Install.'],
  ['Register or sign in', 'Create an account, or sign in if you already have one.'],
  ['Create a group', 'Set up a group for your flat, trip or friends and add its members.'],
  ['Add expenses', 'Tap the green + button, enter the amount and pick a category.'],
  ['Review the month', 'Check member totals on the Expenses tab, or open Analytics and Monthly.'],
  ['Settle up', 'Open the Settlement tab to see who pays whom, and tap Mark Paid once done.'],
]

export const faqs = [
  ['What is SplitMate?', 'SplitMate is an Android app for tracking shared expenses and splitting them within groups. Its in-app tagline is “Split expenses. Stay even.”'],
  ['How do I download the app?', 'Use any Download APK button on this page. The file is hosted on Expo’s artifact domain (expo.dev).'],
  ['How do I install an APK?', 'Open the downloaded file. Android may ask you to allow installs from your browser or file manager, because the app is not from the Play Store. Allow it only if you trust this source, then tap Install. You can turn the permission off again afterwards in Settings.'],
  ['Is SplitMate available for iPhone?', 'Only an Android APK is offered here. An iPhone version has not been announced on this site.'],
  ['How do I create an account?', 'Open the app and choose the register option, then sign in with the details you created. Never reuse a password from another service.'],
  ['Does SplitMate process payments?', 'This site does not claim in-app money transfers. SplitMate tracks expenses, suggests who should pay whom, and lets you tap Mark Paid to record it. The actual payment happens between you and your group members.'],
  ['What if the APK fails to install?', 'Check that you have free storage, that the file finished downloading, and that installs from your browser or file manager are allowed. Then download it again. If it still fails, use the contact details on this site once they are added.'],
  ['How do I receive app updates?', 'Sideloaded APKs do not update through the Play Store. Check this page for a newer APK and install it over the existing app. Automatic in-app updates are not confirmed.'],
]
