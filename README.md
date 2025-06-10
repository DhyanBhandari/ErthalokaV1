# ErthaLoka Static Site

This repository contains the static website for ErthaLoka.

## Carbon Coin Wallet

A simple Firebase based wallet system is provided.

1. **Firestore structure**
   - Each user document (`users/{uid}`) requires a numeric field `carbonCoins`.
   - A sub collection `users/{uid}/transactions/{transactionId}` stores every coin movement with the following fields:
     - `type` – one of `purchase`, `reward`, `admin_add`, `admin_remove`, `manual_upi_reward_verification`.
     - `amount` – number of coins added or removed.
     - `productId` – related product or event id if applicable.
     - `timestamp` – server timestamp of the transaction.
     - `description` – optional text description.

2. **Wallet Display**
   - `wallet.js` initializes Firebase and listens for balance updates. The balance is displayed in a small card located near the top‑right of the page.
   - `src/components/WalletDisplay.tsx` provides a React component version of the wallet display for future integration.

3. **Rewarding Coins**
   - Call `addTransaction(uid, amount, type, productId, description)` to reward or deduct coins and automatically log a transaction.
   - `simulateProductPurchase(uid, productId, coins)` demonstrates rewarding coins after a purchase.

For manual UPI verification (Phase 3), an admin can call the same `addTransaction` function with type `manual_upi_reward_verification` once the UTR is confirmed.

## Next.js Application

The `erthaloka-next` folder contains a more complete Next.js implementation.
To run it locally you need [Node.js](https://nodejs.org) installed (version 18
or newer).

1. Open a terminal and navigate into the project:

   ```bash
   cd erthaloka-next
   ```

2. Install dependencies with your preferred package manager:

   ```bash
   npm install
   # or
   pnpm install
   ```

3. Create a `.env.local` file inside `erthaloka-next` with your Firebase
   configuration:

   ```text
   NEXT_PUBLIC_FIREBASE_API_KEY=your_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The site will be available at <http://localhost:3000>.

5. For a production build run `npm run build` followed by `npm start`.
