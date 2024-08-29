# Earthquake


## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- **Node.js** (v20.x or later)
- **pnpm** (v7.x or later) - A package manager
- **MongoDB** (v4.x or later) - A NoSQL database

## Installation

1. **Clone the Repository**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/leoneed/saftt.git
   cd saftt
   pnpm install
   cd packages/backend
   pnpm install
   # DB config uses default: mongodb://localhost:27017/earthquake
   # to change: edit file saftt/packages/backend/src/db/connection.ts
   pnpm run parseCSV <path to csv file> # to upload data to DB
   pnpm run dev # run backend

   #new terminal tab:
   cd saftt/packages/frontend
   pnpm install
   pnpm run dev # run frontend
   ```

   To open client: http://localhost:3000