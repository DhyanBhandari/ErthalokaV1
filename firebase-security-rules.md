# Firebase Firestore Security Rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isAdmin() {
      return request.auth != null &&
             get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'Admin';
    }

    match /products/{id} {
      allow read, write: if isAdmin();
    }

    match /events/{id} {
      allow read, write: if isAdmin();
    }

    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow update: if isAdmin();
    }

    match /transactions/{id} {
      allow read, write: if isAdmin();
    }
  }
}
```

Only users with the `Admin` role can modify products, events, or change other users' `carbonCoins` or roles. Regular users may read their own profile data. Thorough testing should confirm that non-admin accounts receive permission-denied errors when attempting restricted operations.
