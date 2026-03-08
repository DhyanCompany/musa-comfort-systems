# HVAC Website - Professional Heating & Cooling Services

A professional HVAC services website built with Next.js and Tailwind CSS, replicating the design and functionality of Maher Heating & Cooling website.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Hero Section**: Eye-catching banner with call-to-action buttons
- **Services Grid**: Comprehensive HVAC services with real images
- **Promotions Section**: Special offers and deals
- **Process Overview**: Step-by-step service delivery
- **Why Choose Us**: Key differentiators and benefits
- **Customer Testimonials**: Client reviews and ratings
- **Blog Section**: Latest HVAC insights and tips
- **Contact Footer**: Complete contact information

## Technology Stack

- **Next.js 14**: React framework for production
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Professional HVAC industry appearance

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Changing Company Name
1. Update the company name in:
   - `src/components/Header.js` (logo and navigation)
   - `src/components/Footer.js` (footer information)
   - `src/app/layout.js` (metadata)

### Updating Contact Information
1. Edit contact details in:
   - `src/components/Header.js` (phone number)
   - `src/components/Footer.js` (complete contact info)

### Modifying Services
1. Update services array in `src/components/Services.js`
2. Add/remove service items as needed
3. Update images and descriptions

### Changing Colors
1. Modify color scheme in `tailwind.config.js`:
   - `primary`: Main brand color (orange)
   - `secondary`: Dark color (navy)
   - `accent`: Accent color (blue)

## Images

All images are currently using Unsplash placeholder images. Replace with your actual HVAC equipment and team photos:

1. Service images in `src/components/Services.js`
2. Promotion images in `src/components/Promotions.js`
3. About section images in `src/components/WhyChoose.js`
4. Blog post images in `src/components/Blog.js`

## Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables
Create a `.env.local` file for any environment-specific configurations.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support and customization, please contact your development team.
