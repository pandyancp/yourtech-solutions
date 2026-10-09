import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import { EnquiryRecord, EnquiryInput } from '../types/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '../../data');
const DATA_FILE = path.join(DATA_DIR, 'enquiries.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
}

export class StorageService {
  private static readRecords(): EnquiryRecord[] {
    try {
      if (!fs.existsSync(DATA_FILE)) {
        return [];
      }
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(data) || [];
    } catch (err) {
      console.error('[StorageService] Error reading enquiries file:', err);
      return [];
    }
  }

  private static writeRecords(records: EnquiryRecord[]): void {
    try {
      fs.writeFileSync(DATA_FILE, JSON.stringify(records, null, 2), 'utf-8');
    } catch (err) {
      console.error('[StorageService] Error writing enquiries file:', err);
    }
  }

  public static async createEnquiry(
    input: EnquiryInput,
    ipAddress?: string,
    userAgent?: string
  ): Promise<EnquiryRecord> {
    const records = this.readRecords();
    const now = new Date().toISOString();

    const newRecord: EnquiryRecord = {
      id: crypto.randomUUID(),
      name: input.name,
      email: input.email,
      phone: input.phone,
      service: input.service,
      message: input.message,
      status: 'NEW',
      ipAddress: ipAddress || 'unknown',
      userAgent: userAgent || 'unknown',
      createdAt: now,
      updatedAt: now,
    };

    records.unshift(newRecord);
    this.writeRecords(records);

    return newRecord;
  }

  public static async getAllEnquiries(): Promise<EnquiryRecord[]> {
    return this.readRecords();
  }

  public static async getEnquiryById(id: string): Promise<EnquiryRecord | null> {
    const records = this.readRecords();
    return records.find((r) => r.id === id) || null;
  }
}
