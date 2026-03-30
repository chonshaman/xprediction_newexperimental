/**
 * Other Component Previews (Badge, Checkbox, Switch, etc.)
 */
import React, { useState } from 'react';
import { Badge } from '../../ui/badge';
import { Checkbox } from '../../ui/checkbox';
import { Switch } from '../../ui/switch';
import { Label } from '../../ui/label';
import { Slider } from '../../ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Separator } from '../../ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Progress } from '../../ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card';
import { Alert, AlertDescription, AlertTitle } from '../../ui/alert';
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';
import { Skeleton } from '../../ui/skeleton';
import { Toggle } from '../../ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '../../ui/toggle-group';
import { Bold, Italic, Underline } from 'lucide-react';

// ==================== Badge ====================
export function BadgeDefault() {
  return <Badge variant="default">Default</Badge>;
}
export function BadgeSecondary() {
  return <Badge variant="secondary">Secondary</Badge>;
}
export function BadgeDestructive() {
  return <Badge variant="destructive">Destructive</Badge>;
}
export function BadgeOutline() {
  return <Badge variant="outline">Outline</Badge>;
}

// ==================== Checkbox ====================
export function CheckboxUnchecked() {
  const [checked, setChecked] = useState(false);
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-5rem)', cursor: 'pointer' }}>
      <Checkbox checked={checked} onCheckedChange={(c) => setChecked(c as boolean)} />
      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)' }}>Unchecked</span>
    </label>
  );
}
export function CheckboxChecked() {
  const [checked, setChecked] = useState(true);
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-5rem)', cursor: 'pointer' }}>
      <Checkbox checked={checked} onCheckedChange={(c) => setChecked(c as boolean)} />
      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)' }}>Checked</span>
    </label>
  );
}
export function CheckboxDisabled() {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-5rem)', opacity: 0.5, cursor: 'not-allowed' }}>
      <Checkbox disabled />
      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)' }}>Disabled</span>
    </label>
  );
}

// ==================== Switch ====================
export function SwitchUnchecked() {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-5rem)' }}>
      <Switch checked={checked} onCheckedChange={setChecked} />
      <Label style={{ fontSize: 'var(--text-sm)' }}>Unchecked</Label>
    </div>
  );
}
export function SwitchChecked() {
  const [checked, setChecked] = useState(true);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-5rem)' }}>
      <Switch checked={checked} onCheckedChange={setChecked} />
      <Label style={{ fontSize: 'var(--text-sm)' }}>Checked</Label>
    </div>
  );
}
export function SwitchDisabled() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-5rem)', opacity: 0.5 }}>
      <Switch disabled />
      <Label style={{ fontSize: 'var(--text-sm)' }}>Disabled</Label>
    </div>
  );
}

// ==================== Slider ====================
export function SliderDefault() {
  const [value, setValue] = useState([50]);
  return <Slider value={value} onValueChange={setValue} max={100} step={1} style={{ width: '300px' }} />;
}

// ==================== Select ====================
export function SelectDefault() {
  return (
    <Select>
      <SelectTrigger style={{ width: '200px' }}>
        <SelectValue placeholder="Select option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  );
}

// ==================== Separator ====================
export function SeparatorDefault() {
  return <Separator style={{ width: '100%', maxWidth: '300px' }} />;
}

// ==================== Avatar ====================
export function AvatarDefault() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
export function AvatarFallbackOnly() {
  return (
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
}

// ==================== Progress ====================
export function ProgressDefault() {
  return <Progress value={60} style={{ width: '300px' }} />;
}

// ==================== Tabs ====================
export function TabsDefault() {
  return (
    <Tabs defaultValue="tab1" style={{ width: '400px' }}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', padding: 'var(--gap--1rem)' }}>
          Content for Tab 1
        </p>
      </TabsContent>
      <TabsContent value="tab2">
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', padding: 'var(--gap--1rem)' }}>
          Content for Tab 2
        </p>
      </TabsContent>
      <TabsContent value="tab3">
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', padding: 'var(--gap--1rem)' }}>
          Content for Tab 3
        </p>
      </TabsContent>
    </Tabs>
  );
}

// ==================== Card ====================
export function CardDefault() {
  return (
    <Card style={{ width: '350px' }}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)' }}>
          This is the card content area where you can place any elements.
        </p>
      </CardContent>
      <CardFooter>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>
          Card footer
        </p>
      </CardFooter>
    </Card>
  );
}

// ==================== Alert ====================
export function AlertDefault() {
  return (
    <Alert style={{ width: '400px' }}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        This is an alert component that displays important information.
      </AlertDescription>
    </Alert>
  );
}

// ==================== Radio Group ====================
export function RadioGroupDefault() {
  return (
    <RadioGroup defaultValue="option1">
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-5rem)' }}>
        <RadioGroupItem value="option1" id="r1" />
        <Label htmlFor="r1" style={{ fontSize: 'var(--text-sm)' }}>Option 1</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-5rem)' }}>
        <RadioGroupItem value="option2" id="r2" />
        <Label htmlFor="r2" style={{ fontSize: 'var(--text-sm)' }}>Option 2</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-5rem)' }}>
        <RadioGroupItem value="option3" id="r3" />
        <Label htmlFor="r3" style={{ fontSize: 'var(--text-sm)' }}>Option 3</Label>
      </div>
    </RadioGroup>
  );
}
export function RadioGroupDisabled() {
  return (
    <RadioGroup defaultValue="option1" disabled>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-5rem)', opacity: 0.5 }}>
        <RadioGroupItem value="option1" id="rd1" />
        <Label htmlFor="rd1" style={{ fontSize: 'var(--text-sm)' }}>Disabled Option 1</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-5rem)', opacity: 0.5 }}>
        <RadioGroupItem value="option2" id="rd2" />
        <Label htmlFor="rd2" style={{ fontSize: 'var(--text-sm)' }}>Disabled Option 2</Label>
      </div>
    </RadioGroup>
  );
}

// ==================== Label ====================
export function LabelDefault() {
  return <Label style={{ fontSize: 'var(--text-sm)' }}>Label Text</Label>;
}

// ==================== Accordion ====================
export function AccordionDefault() {
  return (
    <Accordion type="single" collapsible style={{ width: '400px' }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Accordion Item 1</AccordionTrigger>
        <AccordionContent>
          This is the content for accordion item 1.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Accordion Item 2</AccordionTrigger>
        <AccordionContent>
          This is the content for accordion item 2.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

// ==================== Skeleton ====================
export function SkeletonDefault() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap--0-5rem)', width: '300px' }}>
      <Skeleton style={{ height: '20px', width: '100%' }} />
      <Skeleton style={{ height: '20px', width: '80%' }} />
      <Skeleton style={{ height: '20px', width: '60%' }} />
    </div>
  );
}

// ==================== Toggle ====================
export function ToggleDefault() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}
export function TogglePressed() {
  const [pressed, setPressed] = useState(true);
  return (
    <Toggle pressed={pressed} onPressedChange={setPressed} aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}

// ==================== Toggle Group ====================
export function ToggleGroupDefault() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
