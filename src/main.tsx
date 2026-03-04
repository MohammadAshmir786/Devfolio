import { createRoot } from 'react-dom/client'
import SparkleProvider from '@/components/effects/SparkleProvider.tsx';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<SparkleProvider><App /></SparkleProvider>);
