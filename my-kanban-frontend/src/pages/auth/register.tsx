// pages/auth/register.tsx
import React from 'react';
import { Container, Paper, TextInput, PasswordInput, Button, Checkbox, Text, Title, Anchor } from '@mantine/core';
import Link from 'next/link';
import classes from './AuthenticationPage.module.css';

const RegisterPage: React.FC = () => {
    return (
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
                Create an Account
            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                Already have an account?{' '}
                <Anchor size="sm" component="button">
                    <Link href="/auth/login">Sign in</Link>
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="Enter your email address" required />
                <PasswordInput label="Password" placeholder="Choose a strong password" required mt="md" />
                {/* <Checkbox label="Remember me" /> */}

                <Button fullWidth mt="xl" variant="gradient">
                    Create Account
                </Button>
            </Paper>
        </Container>
    );
};

export default RegisterPage;
