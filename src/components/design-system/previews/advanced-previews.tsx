/**
 * Advanced Component Previews (Calendar, Chart, Carousel, etc.)
 */
import React from 'react';
import { Calendar } from '../../ui/calendar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../ui/carousel';
import { Resizable, ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../../ui/resizable';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../../ui/input-otp';

// ==================== Calendar ====================
export function CalendarDefault() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      style={{
        background: 'var(--card-normal)',
        border: '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--gap--1rem)',
        fontFamily: 'Inter, sans-serif'
      }}
    />
  );
}

// ==================== Carousel ====================
export function CarouselDefault() {
  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <Carousel>
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((num) => (
            <CarouselItem key={num}>
              <div 
                style={{ 
                  padding: 'var(--gap--1rem)',
                  background: 'var(--card-normal)',
                  border: '1px solid var(--black-a2)',
                  borderRadius: 'var(--radius-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '200px',
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 'var(--font-weight-extra-bold)',
                  color: 'var(--card-foreground)'
                }}
              >
                {num}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          style={{ 
            background: 'var(--card-normal)',
            border: '1px solid var(--black-a2)',
            color: 'var(--card-foreground)'
          }}
        />
        <CarouselNext 
          style={{ 
            background: 'var(--card-normal)',
            border: '1px solid var(--black-a2)',
            color: 'var(--card-foreground)'
          }}
        />
      </Carousel>
    </div>
  );
}

// ==================== Resizable ====================
export function ResizableDefault() {
  return (
    <div style={{ width: '100%', maxWidth: '600px', height: '200px' }}>
      <ResizablePanelGroup 
        direction="horizontal" 
        style={{ 
          border: '1px solid var(--black-a2)',
          borderRadius: 'var(--radius-card)',
          overflow: 'hidden'
        }}
      >
        <ResizablePanel defaultSize={50}>
          <div 
            style={{ 
              height: '100%', 
              padding: 'var(--gap--1rem)',
              background: 'var(--lum-01)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'var(--text-sm)',
              color: 'var(--card-foreground)'
            }}
          >
            Panel 1
          </div>
        </ResizablePanel>
        <ResizableHandle 
          style={{ 
            width: '4px',
            background: 'var(--black-a2)'
          }}
        />
        <ResizablePanel defaultSize={50}>
          <div 
            style={{ 
              height: '100%', 
              padding: 'var(--gap--1rem)',
              background: 'var(--lum-02)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'var(--text-sm)',
              color: 'var(--card-foreground)'
            }}
          >
            Panel 2
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

// ==================== Input OTP ====================
export function InputOTPDefault() {
  const [value, setValue] = React.useState('');
  
  return (
    <InputOTP maxLength={6} value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot 
          index={0} 
          style={{
            width: '48px',
            height: '48px',
            border: '1px solid var(--black-a2)',
            borderRadius: 'var(--border-radius--0-375rem)',
            fontSize: 'var(--text-xl)',
            fontWeight: 'var(--font-weight-semi-bold)',
            color: 'var(--card-foreground)',
            background: 'var(--card-normal)',
            textAlign: 'center'
          }}
        />
        <InputOTPSlot 
          index={1} 
          style={{
            width: '48px',
            height: '48px',
            border: '1px solid var(--black-a2)',
            borderRadius: 'var(--border-radius--0-375rem)',
            fontSize: 'var(--text-xl)',
            fontWeight: 'var(--font-weight-semi-bold)',
            color: 'var(--card-foreground)',
            background: 'var(--card-normal)',
            textAlign: 'center'
          }}
        />
        <InputOTPSlot 
          index={2} 
          style={{
            width: '48px',
            height: '48px',
            border: '1px solid var(--black-a2)',
            borderRadius: 'var(--border-radius--0-375rem)',
            fontSize: 'var(--text-xl)',
            fontWeight: 'var(--font-weight-semi-bold)',
            color: 'var(--card-foreground)',
            background: 'var(--card-normal)',
            textAlign: 'center'
          }}
        />
        <InputOTPSlot 
          index={3} 
          style={{
            width: '48px',
            height: '48px',
            border: '1px solid var(--black-a2)',
            borderRadius: 'var(--border-radius--0-375rem)',
            fontSize: 'var(--text-xl)',
            fontWeight: 'var(--font-weight-semi-bold)',
            color: 'var(--card-foreground)',
            background: 'var(--card-normal)',
            textAlign: 'center'
          }}
        />
        <InputOTPSlot 
          index={4} 
          style={{
            width: '48px',
            height: '48px',
            border: '1px solid var(--black-a2)',
            borderRadius: 'var(--border-radius--0-375rem)',
            fontSize: 'var(--text-xl)',
            fontWeight: 'var(--font-weight-semi-bold)',
            color: 'var(--card-foreground)',
            background: 'var(--card-normal)',
            textAlign: 'center'
          }}
        />
        <InputOTPSlot 
          index={5} 
          style={{
            width: '48px',
            height: '48px',
            border: '1px solid var(--black-a2)',
            borderRadius: 'var(--border-radius--0-375rem)',
            fontSize: 'var(--text-xl)',
            fontWeight: 'var(--font-weight-semi-bold)',
            color: 'var(--card-foreground)',
            background: 'var(--card-normal)',
            textAlign: 'center'
          }}
        />
      </InputOTPGroup>
    </InputOTP>
  );
}
