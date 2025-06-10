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
