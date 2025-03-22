# Carbon Crunch

![Carbon Crunch Logo](generated-icon.png)

Carbon Crunch is a modern web application designed to help individuals and businesses track, reduce, and offset their carbon footprint through intuitive analytics and actionable insights.

## Live Demo


## Features

- **Interactive 3D Slider**: Engaging carousel with perspective effects showcasing key features
- **Responsive Design**: Fully adaptive layouts for mobile, tablet, and desktop devices
- **Modern UI Components**: Clean, intuitive interface with attention to accessibility
- **Smooth Animations**: Subtle motion effects powered by Framer Motion
- **Component-Based Architecture**: Modular code structure for easy maintenance

## Project Structure

```
carbon-crunch/
├── client/               # Frontend React application
│   ├── src/              
│   │   ├── assets/       # Static assets and SVG components
│   │   ├── components/   # UI components by section
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   ├── pages/        # Page components
│   │   ├── App.tsx       # Main application component
│   │   └── main.tsx      # Application entry point
│   └── index.html        # HTML template
├── server/               # Express backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage interface
│   └── vite.ts           # Vite server configuration
├── shared/               # Shared code between client and server
│   └── schema.ts         # Data models and validation
└── theme.json            # Application theme configuration
```

## Technologies Used

- **React 18**: Frontend UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Express.js**: Backend server framework
- **Vite**: Frontend build tool
- **Drizzle ORM**: Database ORM (for future database integration)
- **Shadcn UI**: Component library based on Radix UI

## Installation and Setup

### Prerequisites

- Node.js 18+ and npm

### Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd carbon-crunch
```

2. Install dependencies:
```bash
npm install
```

If you encounter Rollup dependency issues, try a clean installation:
```bash
# On Windows
del package-lock.json
rmdir /s /q node_modules

# On Mac/Linux
rm package-lock.json
rm -rf node_modules

# Then reinstall
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to:
```
http://localhost:5000
```

### Alternative Methods

If you continue to experience issues with the development server:

#### Method 1: Direct Vite Server
```bash
npx vite
```

#### Method 2: Build and Serve
```bash
# Build the project
npx vite build

# Create a simple server file (serve.js):
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

# Run the server
node serve.js
```

## Key Components

### 3D Slider
The showcase 3D slider in the hero section combines CSS 3D transforms with React state management to create a unique carousel effect with depth. Key features include:

- Perspective-based 3D transformations
- Automatic rotation with smart pause on user interaction
- Interactive navigation controls
- Optimized rendering with GPU acceleration

### Responsive Design
The application is fully responsive with dedicated layouts for:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+

## Future Enhancements

- User authentication system
- Carbon footprint calculator
- Personal dashboard with tracking metrics
- Integration with carbon offset providers
- Community challenges and achievements

## Troubleshooting

### Common Issues

1. **Missing dependencies**: Ensure you've run `npm install` successfully
2. **Port conflicts**: If port 5000 is in use, modify the port in server/index.ts
3. **Module resolution errors**: Check path aliases in tsconfig.json and vite.config.ts

### Specific Errors

#### Rollup Native Module Error
If you encounter errors related to Rollup native modules, try the clean installation method described in the installation section.

## License

[MIT](LICENSE)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For questions or feedback, please open an issue in the repository.