/**
 * Dialog & Modal Preview Components
 */
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../../ui/alert-dialog';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../../ui/sheet';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../../ui/drawer';
import { Button } from '../../ui/button';

// ==================== Dialog ====================
export function DialogDefault() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" style={{ borderColor: 'var(--black-a2)' }}>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent 
        style={{ 
          background: 'var(--card-normal)', 
          border: '1px solid var(--black-a2)',
          borderRadius: 'var(--radius-card)',
          padding: 'var(--gap--1-5rem)',
          boxShadow: 'var(--shadow-2)'
        }}
      >
        <DialogHeader>
          <DialogTitle style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--card-foreground)' }}>
            Dialog Title
          </DialogTitle>
          <DialogDescription style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>
            This is a dialog description explaining what the dialog is about.
          </DialogDescription>
        </DialogHeader>
        <div style={{ padding: 'var(--gap--1rem) 0' }}>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)' }}>
            Dialog content goes here.
          </p>
        </div>
        <DialogFooter>
          <Button 
            variant="outline"
            size="default"
            style={{
              background: "transparent",
              border: "1px solid var(--black-a2)",
              color: "var(--card-foreground)",
              borderRadius: "var(--radius-button)",
              height: "40px",
              padding: "0 var(--gap--1rem)",
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-semi-bold)",
            }}
          >
            Cancel
          </Button>
          <Button 
            variant="primary"
            size="default"
            style={{
              background: "var(--primary-button-bg)",
              color: "var(--side-bar-hold-white)",
              borderRadius: "var(--radius-button)",
              height: "40px",
              padding: "0 var(--gap--1rem)",
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-semi-bold)",
            }}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ==================== Alert Dialog ====================
export function AlertDialogDefault() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" style={{ borderColor: 'var(--black-a2)' }}>Open Alert</Button>
      </AlertDialogTrigger>
      <AlertDialogContent 
        style={{ 
          background: 'var(--card-normal)', 
          border: '1px solid var(--black-a2)',
          borderRadius: 'var(--radius-card)',
          padding: 'var(--gap--1-5rem)',
          boxShadow: 'var(--shadow-2)'
        }}
      >
        <AlertDialogHeader>
          <AlertDialogTitle style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--card-foreground)' }}>
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>
            This action cannot be undone. This will permanently delete your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

// ==================== Sheet ====================
export function SheetDefault() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent 
        style={{ 
          background: 'var(--lum-01)', 
          borderLeft: '1px solid var(--black-a2)',
          padding: 'var(--gap--1-5rem)'
        }}
      >
        <SheetHeader>
          <SheetTitle style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--card-foreground)' }}>
            Sheet Title
          </SheetTitle>
          <SheetDescription style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>
            Sheet description goes here.
          </SheetDescription>
        </SheetHeader>
        <div style={{ marginTop: 'var(--gap--1-5rem)' }}>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)' }}>
            Sheet content here.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// ==================== Drawer ====================
export function DrawerDefault() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent 
        style={{ 
          background: 'var(--lum-01)', 
          borderTop: '1px solid var(--black-a2)',
          borderRadius: 'var(--radius-card) var(--radius-card) 0 0',
          padding: 'var(--gap--1-5rem)'
        }}
      >
        <DrawerHeader>
          <DrawerTitle style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--card-foreground)' }}>
            Drawer Title
          </DrawerTitle>
          <DrawerDescription style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>
            Drawer description goes here.
          </DrawerDescription>
        </DrawerHeader>
        <div style={{ padding: 'var(--gap--1rem) 0' }}>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)' }}>
            Drawer content.
          </p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}